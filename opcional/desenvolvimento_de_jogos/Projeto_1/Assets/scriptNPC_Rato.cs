using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class scriptNPC_Rato : MonoBehaviour
{
    private Rigidbody2D rbd;
    public GameObject pc;
    public float velocidade = 5;
    public float distancia = 0.7f;
    public LayerMask mascara;
    // Start is called before the first frame update

    void Start()
    {
        rbd = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {

        rbd.velocity = new Vector2(velocidade, 0);
        RaycastHit2D hit;
        hit = Physics2D.Raycast(transform.position, transform.right, distancia, mascara);
        if(hit.collider != null)
        {
            if (hit.collider.gameObject.Equals(pc.gameObject))
            {
                Destroy(hit.collider.gameObject);
                SceneManager.LoadScene(2);
            }
            velocidade = velocidade * -1;
            rbd.velocity = new Vector2(velocidade, 0);
            transform.Rotate(new Vector2(0, 180));
        }



    }
}
