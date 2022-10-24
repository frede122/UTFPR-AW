using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScriptPC : MonoBehaviour
{
    private Rigidbody2D rbd;
    private Animator anim;
    public GameObject pe;
    public float vel = 10;
    public float dist = 0.2f;

    private bool direita = true;
    public float forcaPulo = 450;
    private bool chao = false;
    public LayerMask mascara;

    //ARRUMANDO A CASA
    private float x;
    private RaycastHit2D hit;

    void Start()
    {

        rbd = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
    }

    private void mover()
    {
        x = Input.GetAxis("Horizontal");
        //transform.Translate(new Vector2(Mathf.Abs(x) * vel * Time.deltaTime, 0));
        rbd.velocity = new Vector2(x * vel, rbd.velocity.y);
        virar();
    }

    private void virar()
    {
        if (direita && x < 0 || !direita && x > 0)
        {
            transform.Rotate(new Vector2(0, 180));
            direita = !direita;
        }
    }
    private void animar()
    {
        anim.SetBool("pcparado", x == 0);
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        chao = true;
        transform.parent = collision.transform;
        anim.SetBool("pcpulando", false);
    }

    private void OnCollisionExit2D(Collision2D collision)
    {
        chao = false;
        transform.parent = null;
    }

    private void pisandoOnde()
    {
        hit = Physics2D.Raycast(pe.transform.position, -pe.transform.up, dist, mascara);
        if (hit.collider != null)
            transform.parent = hit.collider.transform;
        else
            transform.parent = null;
    }
    private void pisando()
    {
        hit = Physics2D.Raycast(transform.position, -transform.up, 0.5f, mascara);
        if (hit.collider != null)
            Destroy(hit.collider.gameObject);
    }

    private void pulo()
    {
        if (Input.GetKeyDown(KeyCode.Space) && chao)
        {
            anim.SetBool("pcpulando", true);
            chao = false;
            //if (hit.collider != null)
                rbd.AddForce(new Vector2(0, forcaPulo));
        }
    }
    // Update is called once per frame
    void Update()
    {
        mover();
        animar();
        //pisandoOnde();
        pulo();
        pisando();
    }


}
