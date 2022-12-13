using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptCamera : MonoBehaviour
{
    // Start is called before the first frame update
    public float velocidadeRotacao = 500;
    private float unidadeRx, unidadeRy;
    public GameObject pc;
    void Start()
    {
        unidadeRx = 0f;
        Cursor.lockState = CursorLockMode.Locked;
    }

    // Update is called once per frame
    void Update()
    {
        unidadeRx += Input.GetAxis("Mouse Y") * velocidadeRotacao * Time.deltaTime;
        unidadeRx = Mathf.Clamp(unidadeRx, -60f, 60);
        transform.localEulerAngles = new Vector3(-unidadeRx, 0, 0);

        unidadeRy = Input.GetAxis("Mouse X") * velocidadeRotacao * Time.deltaTime;
        pc.transform.Rotate(0, unidadeRy, 0);
        transform.position = new Vector3(pc.transform.position.x, 2.06f, pc.transform.position.z+1);
    }
}
