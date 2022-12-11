using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptPC : MonoBehaviour
{
    // Start is called before the first frame update
    private Rigidbody rbd;
    public float vel;
    void Start()
    {
        vel = 10;
        rbd = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    // void Update()
    // {
    //     float moveFrente = Input.GetAxis("Vertical")  * Time.deltaTime * vel;
    //     float moveLado = Input.GetAxis("Horizontal")  * Time.deltaTime * vel;

    //     rbd.velocity = new Vector3(moveLado,
    //                                rbd.velocity.y, 
    //                                moveFrente);
    // }

    Vector3 rot = Vector3.zero;
	float rotSpeed = 40f;
	Animator anim;

	// Use this for initialization
	void Awake()
	{
		anim = gameObject.GetComponent<Animator>();
		gameObject.transform.eulerAngles = rot;
	}

	// Update is called once per frame
	void Update()
	{
		CheckKey();
		gameObject.transform.eulerAngles = rot;
                float moveFrente = Input.GetAxis("Vertical")  * Time.deltaTime * vel;
        float moveLado = Input.GetAxis("Horizontal")  * Time.deltaTime * vel;

        rbd.velocity = new Vector3(moveLado,
                                   rbd.velocity.y, 
                                   moveFrente);
	}

	void CheckKey()
	{
		// Walk
		if (Input.GetKey(KeyCode.W))
		{
			anim.SetBool("Walk_Anim", true);
		}
		else if (Input.GetKeyUp(KeyCode.W))
		{
			anim.SetBool("Walk_Anim", false);
		}

		// Rotate Left
		if (Input.GetKey(KeyCode.A))
		{
			rot[1] -= rotSpeed * Time.fixedDeltaTime;
		}

		// Rotate Right
		if (Input.GetKey(KeyCode.D))
		{
			rot[1] += rotSpeed * Time.fixedDeltaTime;
		}

		// Roll
		if (Input.GetKeyDown(KeyCode.Space))
		{
			if (anim.GetBool("Roll_Anim"))
			{
				anim.SetBool("Roll_Anim", false);
			}
			else
			{
				anim.SetBool("Roll_Anim", true);
			}
		}

		// Close
		if (Input.GetKeyDown(KeyCode.LeftControl))
		{
			if (!anim.GetBool("Open_Anim"))
			{
				anim.SetBool("Open_Anim", true);
			}
			else
			{
				anim.SetBool("Open_Anim", false);
			}
		}
	}
}
